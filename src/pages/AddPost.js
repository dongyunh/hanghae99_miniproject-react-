import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/material";

const AddPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    if (data.get("email") === "") {
      alert("아이디가 공란입니다.");
    } else if (data.get("password") === "") {
      alert("비밀번호가 공란입니다.");
    } else if (data.get("nickname") === "") {
      alert("닉네임이 공란입니다.");
    } else if (data.get("password") !== data.get("checkPassword")) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      console.log({
        email: data.get("email"),
        nickname: data.get("nickname"),
        password: data.get("password"),
        checkPassword: data.get("checkPassword"),
      });
    }
  };

  return (
    <Grid container component="main" sx={{ height: "92.7vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs sx={{ mt: 5 }}>
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bold", ml: 1 }}
              >
                이메일로 로그인
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              name="text"
              autoFocus
              sx={{ height: 500 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#f86453", py: 1.5 }}
            >
              <Typography
                component="h2"
                variant="h6"
                sx={{ fontWeight: "bold", ml: 1 }}
              >
                로그인
              </Typography>
            </Button>
            <Grid container>
              <Grid item xs sx={{ mt: 5 }}>
                <Typography variant="caption">
                  아직도 공구리 계정이 없으신가요?{" "}
                  <Link href="/signup" variant="body2">
                    {"회원가입"}
                  </Link>
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddPage;