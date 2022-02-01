module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21372fb512f701e1861f04875a73795a'),
  },
});
