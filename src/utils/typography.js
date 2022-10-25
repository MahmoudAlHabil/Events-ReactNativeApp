const palette = {
    fontSizeXL: 22,
    fontSizeL: 18,
    fontSizeM: 16,
    fontSizeS: 14,
    fontSizeXS: 12,
    lineHeightXL: 30.8,
    lineHeightL: 25.2,
    lineHeightM: 22.4,
    lineHeightS: 19.6,
    lineHeightXS: 16.8,

    // lineHeightXL: 30.8,
    // lineHeightL: 25.2,
    // lineHeightM: 22.4,
    // lineHeightS: 19.6,
    // lineHeightXS: 16.8,

    fontFamilyRegular: 'NotoKufiArabic-Regular',
    fontFamilyMedium: 'NotoKufiArabic-Medium',
    fontFamilySemiBold: 'NotoKufiArabic-SemiBold',
    fontFamilyBold: 'NotoKufiArabic-Bold',
}

const typography = {
    XL: {
        bold: {
            fontSize: palette.fontSizeXL,
            lineHeight: palette.lineHeightXL,
            fontFamily: palette.fontFamilyBold,
        },
        semibold: {
            fontSize: palette.fontSizeXL,
            lineHeight: palette.lineHeightXL,
            fontFamily: palette.fontFamilySemiBold,
        },
        medium: {
            fontSize: palette.fontSizeXL,
            lineHeight: palette.lineHeightXL,
            fontFamily: palette.fontFamilyMedium,
        },
    },
    L: {
        semibold: {
            fontSize: palette.fontSizeL,
            lineHeight: palette.lineHeightL,
            fontFamily: palette.fontFamilySemiBold,
        },
        medium: {
            fontSize: palette.fontSizeL,
            lineHeight: palette.lineHeightL,
            fontFamily: palette.fontFamilyMedium,
        },
        regular: {
            fontSize: palette.fontSizeL,
            lineHeight: palette.lineHeightL,
            fontFamily: palette.fontFamilyRegular,
        },
    },
    M: {
        semibold: {
            fontSize: palette.fontSizeM,
            lineHeight: palette.lineHeightM,
            fontFamily: palette.fontFamilySemiBold,
        },
        medium: {
            fontSize: palette.fontSizeM,
            lineHeight: palette.lineHeightM,
            fontFamily: palette.fontFamilyMedium,
        },
        regular: {
            fontSize: palette.fontSizeM,
            lineHeight: palette.lineHeightM,
            fontFamily: palette.fontFamilyRegular,
        },
    },
    S: {
        semibold: {
            fontSize: palette.fontSizeS,
            lineHeight: palette.lineHeightS,
            fontFamily: palette.fontFamilySemiBold,
        },
        medium: {
            fontSize: palette.fontSizeS,
            lineHeight: palette.lineHeightS,
            fontFamily: palette.fontFamilyMedium,
        },
        regular: {
            fontSize: palette.fontSizeS,
            lineHeight: palette.lineHeightS,
            fontFamily: palette.fontFamilyRegular,
        },
    },
    XS: {
        semibold: {
            fontSize: palette.fontSizeXS,
            lineHeight: palette.lineHeightXS,
            fontFamily: palette.fontFamilySemiBold,
        },
        medium: {
            fontSize: palette.fontSizeXS,
            lineHeight: palette.lineHeightXS,
            fontFamily: palette.fontFamilyMedium,
        },
        regular: {
            fontSize: palette.fontSizeXS,
            lineHeight: palette.lineHeightXS,
            fontFamily: palette.fontFamilyRegular,
        },
    },
}

export default typography;