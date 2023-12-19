export const formatAddress = (address = {}) => {
    if (!Object.keys(address).length) return "No Address added yet!";
    let result = "";
    if (address.address_line_1) {
        result += address.address_line_1;
    }
    if (address.address_line_2) {
        result += ", " + address.address_line_2;
    }
    if (address.city) {
        result += ", " + address.city;
    }
    if (address.state) {
        result += ", " + address.state;
    }
    if (address.country) {
        result += ", " + address.country;
    }
    if (address.zipcode) {
        result += ", " + address.zipcode;
    }
    return result;
};
