export const convertDayToArabic = (dayInEnglish) => {
    switch (dayInEnglish) {
        case 'Sunday':
            return 'الأحد'
        case 'Monday':
            return 'الاثنين'
        case 'Tuesday':
            return 'الثلاثاء'
        case 'Wednesday':
            return 'الأربعاء'
        case 'Thursday':
            return 'الخميس'
        case 'Friday':
            return 'الجمعة'
        case 'Saturday':
            return 'السبت'
    }
}

export const convertTypeEventToArabic = (type) => {
    switch (type) {
        case 'wedding':
            return "حفلة عيد ميلاد"
        case 'birthday':
            return 'حفل زفاف'
        case 'graduation':
            return "حفلة تخرج"
        case 'shopOpening':
            return "افتتاح محل"
        case 'other':
            return 'أخرى'
    }
}

export const imageTypeEvent = (type) => {
    switch (type) {
        case 'wedding':
            return require('../../assets/images/wedding.png')
        case 'birthday':
            return require('../../assets/images/birthday.png')
        case 'graduation':
            return require('../../assets/images/graduation.png')
        case 'shopOpening':
            return require('../../assets/images/shopOpening.png')
        case 'other':
            return require('../../assets/images/other.png')
    }
}

export const convetTimeToArabic = (time) => {
    if (time.includes('AM')) {
        return time.replace('AM', 'ص')
    }
    return time.replace('PM', 'م')
}