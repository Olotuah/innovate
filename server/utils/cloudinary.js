// utils/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// 🔐 Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📁 Setup Cloudinary storage for raw file types (PDF, DOC, DOCX)
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes', // Folder name in your Cloudinary account
    resource_type: 'raw', // Important for non-image files like PDFs/docs
    allowed_formats: ['pdf', 'doc', 'docx'], // Optional: restrict formats
    public_id: (req, file) => {
      // Optional cleaner file naming without extension
      const name = file.originalname.split('.')[0];
      return `${Date.now()}-${name}`;
    },
  },
});

module.exports = { cloudinary, storage };
