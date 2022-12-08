import Layout from "../components/Layout"


import { logVisitors } from "../utils/logVisitors";


import {createDATE} from '../utils/createDATE';
import { getIndividualMembershipData } from "../utils/getIndividualMembershipData";


import Router from 'next/router';
import {useForm} from 'react-hook-form';



import IndividualMembershipForm from "../components/individualMembershipForm";


export default function JoinUs () {
        // logVisitors('Join us');

















    return (<div>
<Layout>

<IndividualMembershipForm />

    





</Layout>
    </div>)
}