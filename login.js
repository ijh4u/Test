import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../Final/Footer/Footer";
import TextField from "@mui/material/TextField";
import main_logo from "../images/main_logo.png";

import google from "../images/google.PNG";
import kakao from "../images/kakao.PNG";
import github from "../images/git.PNG";
import { useStyles } from "../css/LoginStyles";

const Login = ({ users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // TODO: 일반 사용자 로그인 로직 구현
    const adminUser = users.find(
      (user) => user.email === "admin" && user.password === password
    );
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (adminUser) {
      alert("관리자로 로그인 되었습니다.");

      // TODO: 관리자 로그인 성공 시 처리
    } else if (user) {
      alert("로그인 성공");
      // TODO: 일반 사용자 로그인 성공 시 처리
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
    palette: {
      primary: {
        light: "#ffffff",
        main: "#000000",
        dark: "#bdbdbd",
      },
      secondary: {
        main: "#FF8A2D",
        dark: "#ffcc80",
        contrastText: "#ffffff",
        light: "#ffffff",
      },
    },
  });

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 일반 사용자 로그인 로직 구현
    const adminUser = users.find(
      (user) => user.email === "admin" && user.password === password
    );
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (adminUser) {
      alert("관리자로 로그인 되었습니다.");
      // TODO: 관리자 로그인 성공 시 처리
    } else if (user) {
      alert("로그인 성공");
      // TODO: 일반 사용자 로그인 성공 시 처리
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const TitleWrap = () => (
    <div className={classes.title_wrap} align="center">
      <div className={classes.title}>
        <h1>
          <Link to="/">
            <img
              src={main_logo}
              alt="logo"
              width="300px"
              height="75px"
              className={classes.logo_img}
            />
          </Link>
        </h1>
        <Typography variant="h5" className={classes.login_desc}>
          Login with
        </Typography>
      </div>
      <div className={classes.social_buttons}>
        <button type="button" className={classes.google_button}>
          <img src={google} alt="google" className={classes.social_icon} />
        </button>
        <button type="button" className={classes.kakao_button}>
          <img src={kakao} alt="kakao" className={classes.social_icon} />
        </button>
        <button type="button" className={classes.github_button}>
          <img src={github} alt="github" className={classes.social_icon} />
        </button>
      </div>
      <div className={classes.hr_section}>OR</div>
    </div>
  );

  const InputWrap = () => (
    <form onSubmit={handleLogin}>
      <div className={classes.input_wrap}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          color="secondary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
        />

        <Button
          className={classes.submit_button}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          <Typography variant="h5">Login</Typography>
        </Button>
      </div>
    </form>
  );

  const Nav = () => (
    <div className={classes.nav} align="center">
      <Link to="/SignUp" className={classes.does_not_exist}>
        <Button
          className={`${classes.account_according_to_cust_and_gdocs_req} ${classes.signup_button}`}
        >
          회원 가입
        </Button>
      </Link>
      <Button className={classes.does_not_exist}>아이디 찾기</Button>
      <Button className={classes.does_not_exist}>비밀번호 찾기</Button>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.login_page}>
        <TitleWrap />
        <div className={classes.content_wrap}>
          <InputWrap />
          <Nav />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Login;
