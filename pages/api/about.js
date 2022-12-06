import { logVisitors } from "../../utils/logVisitors";
import { createTimestamp } from "../../utils/createTimestamp";



export default function handler(req, res) {




    const data = {
        title: 'Naphill Tennis Club - Policies',
        clubHouseKeys: 'Keys are issued to Committee and Authorised Members. A key-holder will be present to unlock the clubhouse for all matches, competitions, and club sessions. Senior members may apply to the Secretary for a key to the clubhouse for which a refundable deposit of £10 is required.',
        attire: 'Appropriate clothing and tennis shoes must be worn on court – no muddy shoes please!',
        courtAvailability: 'If members are waiting to play, a single set (8 games in total) should be played and then the composition of the playing teams changed so that all members have a fair share and equal opportunity to play. Pre-arranged match play, tournaments and club sessions will take priority over general play and a list of unavailable dates will be posted in the clubhouse, with copies available to members.',
        visitors: 'Members are welcome to bring visitors to play tennis on payment of a fee of £3 adult/£1 junior. Please sign the visitors book in the clubhouse and hand your fee to any Committee member, or pay by bank transfer. After 3 visits players will be encouraged to join the Club.',
        inGeneral: 'Please ensure that both courts and clubhouse are left in a clean and tidy condition after play. CHANGE OF YOUR ADDRESS OR EMAIL  – Please inform the Membership Secretary of any changes to your home or email address. ',
        security: 'To prevent unauthorised (i.e. unpaid) use of the courts by non-members, the courts will be locked and members given a combination number for the gate (revised periodically) on receipt of their current year’s subscription.',
    }




   res.status(200).json(data);
}