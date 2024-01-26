/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/english",
        destination: "https://cbs-executive.dk/en/programs/summer-school",
        permanent: true,
      },
      {
        source: "/danish",
        destination: "https://cbs-executive.dk/da/programs/sommerskole",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
