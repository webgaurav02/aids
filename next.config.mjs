/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add rule for handling SVG files
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        use: [
          {
            loader: '@svgr/webpack', // Use SVGR to handle SVGs as React components
            options: {
              icon: true, // Optional: Enable this if you want to treat SVGs as icons
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  