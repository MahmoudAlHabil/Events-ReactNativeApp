import { ScaledSheet } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.white,
    width: 60,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignSelf: "flex-end",
    position: "absolute",
    end: "15@s",
    top: "15@vs",
  },
  title: {
    fontSize: "12@ms",
    fontWeight: "700",
    color: Colors.primary,
    lineHeight: "23@ms",
  },
  dots: {
    bottom: 200,
  },
  dotsContentContainerStyle: {
    justifyContent: "center",
    flex: 1,
  },
});

export default styles;
