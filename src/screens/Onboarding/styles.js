import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../utils";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.common.white,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 55.5,
    start: 20,
    end: 20,
  },
  dots: {
    height: 10,
    marginBottom: 59,
  },
  button: {
    marginTop: 12,
    backgroundColor: colors.common.white
  },
  buttonText: {
    ...typography.L.medium,
    color: colors.common.black,
  },
});

export default styles;
