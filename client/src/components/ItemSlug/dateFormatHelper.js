// YYYY-MM-DD to MM/DD/YYYY converter
export default function dateFormatHelper(date) {
    const dateMatcher = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateMatcher.test(date)) {
        return 'Invalid Date Format';
    }
    const dateStrings = date.split('-');
    const formattedDate = `${dateStrings[1]}/${dateStrings[2]}/${dateStrings[0]}`;
    return formattedDate;
}