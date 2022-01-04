import axios from "axios";

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization: 'Bearer mn3RtxANM2-MmCOMlt9NfKtWnHKQWsgYHxDmYrbgv-n7z6sEO6jSNZp1r01N22JNPtwyc_9UouIhIe45We15HM2Wux2qEeFMFyZ1ogLmgQJxcpJpXUfv6Fq6W2Q6YXYx'
}
});
