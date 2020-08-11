interface ConfigProps {
  STRIPE_API_KEY: string;
}

const config: ConfigProps = {
  STRIPE_API_KEY: process.env.STRIPE_API_KEY || 'pk_test_0IK4vvpCh5skxl3YKfVr1iN300yq1wtjQw',
};

export default config;
