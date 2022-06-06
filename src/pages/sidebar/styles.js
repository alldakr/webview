import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  headerGreeting: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: "0.85rem",
    fontWeight: 700,
  },
  walletBox: {
    borderRadius: 4,
    backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    minHeight: "10vh",
  },
  walletText: {
    display: "flex",
    padding: theme.spacing(2),
    paddingBottom: 0,
    flexGrow: 1,
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  walletAddress: {
    color: "#b99964",
    fontSize: "1rem",
    paddingTop: 0,
    paddingBottom: 8,
  },
  walletButton: {
    display: "flex",
    paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.8rem",
  },
  walletBtn: {
    backgroundColor: "#b99964",
    border: "none",
    borderRadius: 16,
    color: "#ffffff",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
  },
  divider: {
    height: "0.2vh",
    width: "100%",
    background: "#808080",
    border: "none",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  warrantBox: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    width: "100%",
    height: "28vh",
  },
  warrantTitle: {
    paddingBottom: theme.spacing(2),
    fontWeight: 700,
  },
  warrantCard: {
    width: "100%",
    height: 100,
    background: "#f2f2f2",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(2),
  },
  cardImg: {
    width: 80,
    height: 80,
  },
  cardTextBox: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  cardTitle: {
    fontWeight: 700,
  },
  cardDesc: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: 10,
    color: "#808080",
    fontWeight: 700,
  },
  warrnatNoData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#808080",
    fontWeight: 700,
  },
  buyHistBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "28vh",
    overflowY: "auto",
    width: "100%",
  },
  buyHistTitle: {
    paddingBottom: theme.spacing(2),
    fontWeight: 700,
  },
  buyHistCardBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    justifyContent: "space-between",
    width: "100%",
  },
  buyHistCard: {
    width: "30vw",
    backgroundColor: "#f2f2f2",
    padding: theme.spacing(1.2),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buyHistImg: {
    width: "100%",
    height: "100%",
  },
  buyHistBtn: {
    width: "100%",
    margin: theme.spacing(1),
    background: "#000000",
    color: "#ffffff",
    border: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 4,
    fontSize: "0.8em",
    fontWeight: 600,
  },
}));
