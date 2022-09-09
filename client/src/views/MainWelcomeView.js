import { Container } from "@mui/system";
import { getToken } from "../utils/getToken";
import Alert from "@mui/material/Alert";

const MainWelcomeView = () => {
  const token = getToken();

  return token ? (
    <Container>
      <h4>Welcome</h4>

      <button>
        <a href="/home">
          Click here if want to see some museum.. and also update{" "}
        </a>
      </button>
    </Container>
  ) : (
    <Container>
      <Alert severity="error">
        Need to registration or if you have already account then go to Login{" "}
      </Alert>
    </Container>
  );
};

export default MainWelcomeView;
