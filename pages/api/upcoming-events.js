




export default function handler(req, res) {
    const data = {
        title: 'Upcoming Events',
        message: "message",
    }


    res.status(200).json(data);
}