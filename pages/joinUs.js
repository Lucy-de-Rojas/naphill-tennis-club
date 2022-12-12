
import Router from 'next/router';
import {useForm} from 'react-hook-form';


import Layout from "../components/Layout"
import { logVisitors } from "../utils/logVisitors";
import {createDATE} from '../utils/createDATE';
import { getIndividualMembershipData } from "../utils/getIndividualMembershipData";





import IndividualMembershipForm from "../components/individualMembershipForm";
import CoupleMembershipForm from "../components/coupleMembershipForm";
import FamilyMembershipForm from "../components/familyMembershipForm";



// import DatePicker from "react-date-picker";
import DateOfBirth from "../components/dateOfBirthINPUT";






export default function JoinUs () {
        // logVisitors('Join us');

















    return (<div>
<Layout>

<IndividualMembershipForm />



    





</Layout>
    </div>)
}