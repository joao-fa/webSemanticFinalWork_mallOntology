import {useState} from "react";

import {useHistory} from "react-router-dom";
import ClientService from "../../../services/client/ClientService";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (email && password) {
      ClientService.login(email, password).then(
        response => {
          setLoading(false);

          if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/");
            window.location.reload();
          } else {
            setMessage("Email ou senha incorretos!");
          }
        }
      );
    }
  }

  return [{username: email, password, loading, message}, handleEmailChange, handlePasswordChange, handleSubmit];
}

export default useLoginForm;
