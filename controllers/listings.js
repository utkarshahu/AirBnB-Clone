const Listing = require("../models/listing");
const maptilerClient = require("@maptiler/client");
const { listingSchema } = require("../schema.js");

let mapToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = mapToken;

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  try {
    const { listing } = req.body;
    if (!listing.location) {
      req.flash("error", "Location is required.");
      return res.redirect("/listings/new");
    }

    let result = await maptilerClient.geocoding.forward(listing.location);
    if (!result || !result.features || result.features.length === 0) {
      req.flash("error", "Unable to find the location. Please refine your input.");
      return res.redirect("/listings/new");
    }

    let newListing = new Listing(listing);
    newListing.owner = req.user._id;

    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    newListing.geometry = result.features[0].geometry;
    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong while creating the listing.");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image?.url || "";
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  try {
    let { id } = req.params;

    let result = await maptilerClient.geocoding.forward(req.body.listing.location);
    if (!result || !result.features || result.features.length === 0) {
      req.flash("error", "Unable to find the location. Please refine your input.");
      return res.redirect(`/listings/${id}/edit`);
    }

    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    listing.geometry = result.features[0].geometry;
    await listing.save();

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
      await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong while updating the listing.");
    res.redirect(`/listings/${id}/edit`);
  }
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);

  if (!deletedListing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
