




export default function handler(req, res) {
    const data = {
        title: 'Upcoming Events',
        message: "For our upcoming events, please see our facebook pages:",
        facebookLink: 'https://www.facebook.com/groups/naphilltennisclub',
    }


    res.status(200).json(data);
}