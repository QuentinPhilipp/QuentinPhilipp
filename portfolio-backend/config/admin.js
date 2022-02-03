module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ee8d3326f5a53b76eafd7be12dd03f2'),
  },
});
