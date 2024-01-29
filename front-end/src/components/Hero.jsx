import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4 fw-medium">
            This is a boilderplate for MERN Authentication that stores a JWT in
            a HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className="d-flex mt-3">
            <LinkContainer to="/login">
              <Button
                variant="primary"
                // href="/login"
                className="me-3 justify-content-center"
              >
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button
                variant="secondary"
                // href="/register"
                className="justify-content-center"
              >
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
