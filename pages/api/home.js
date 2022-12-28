



export default async function handler(req, res) {





    const data = {
        title: 'Welcome to Naphill Lawn Tennis Club',
        subhead: 'Enjoy playing tennis all year round!',
        mainInfo: 'Naphill Tennis Club is a very friendly club that welcomes new members of all standards. We take great pride in delivering a fun and friendly environment for the whole family, which is both accessible and affordable to all. We have 3 Tiger Turf courts, the artificial grass surface means the courts can be played on in wet weather without slipping, and are much easier on your knees and hips than hard courts. We also have a practice wall, clubhouse and plenty of car parking is available at the village hall.',
    }


   res.status(200).json(data);
}