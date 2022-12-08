import Router from "next/router"
import {useForm} from 'react-hook-form';

import { createDATE } from "../utils/createDATE";
import { getIndividualMembershipData } from "../utils/getIndividualMembershipData";



export default function IndividualMembershipForm() {


    const DATE = createDATE().DATE;
    const DATEexp = createDATE().DATEexp;
    const membershipYEARS = createDATE().membershipYEars;
  


    
// for the form hook:
const formDefaults = {defaultValues: {
    first_name:'',
    surname: '',
    email: '',
    phone: '',
    address: '',
    date_of_birth: '' ,
    membership: '',
    couple: '',
    family: '',
    membershipSTART: DATE,
    memnershipEND: DATEexp,
    membershipYEARS: membershipYEARS,
}};

// using form hook:
const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);















return <div>
    
<h1>Individual Membership:</h1>
<form onSubmit={handleSubmit(getIndividualMembershipData)}>


    {/* first_name: */}
    <input
    {
        ...register("first_name",{
            required: {value: true, message: "we need your first name",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:49, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="first name"
         />
         <p>{errors.first_name?.message}</p>







    {/* surname: */}
    <input
    {
        ...register("surname",{
            required: {value: true, message: "we need your surname",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:99, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="surname"
         />
         <p>{errors.surname?.message}</p>







    {/* email: */}
    <input
    {
        ...register("email",{
            required: {value: true, message: "we need your email",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="email"
        placeholder="email"
         />
         <p>{errors.email?.message}</p>










    {/* phone: */}
    <input
    {
        ...register("phone",{
            required: {value: true, message: "we need your phone",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="tel"
        placeholder="phone"
         />
         <p>{errors.phone?.message}</p>



{/* address: */}
    <textarea
            rows="5"
    {
        ...register("address",{
            required: {value: true, message: 'we do need your address'},
            minLength: {value: 10, message: 'too short, 10 characters at least'},
            maxLength: {value: 2000, message: 'too long'},
            
        })
    }>
    </textarea>


<br />
{/* date_of_birth: */}
<label>
Date of Birth:
    <input
        type="date"
        {
            ...register("date_of_birth",{
                required: {value: true, message: 'we need your date fo birth'},
            })
        }
        
        
        />
        </label>
        <p>{errors.date_of_birth?.message}</p>







    
<br />

{/* radio buttons: */}
<label>
    Adult
    <input type="radio" value="adult" {...register("membership", {required:true})} />
</label>

<label>
    Under 7
    <input type="radio" value="under 7" {...register("membership", {required:true})} />
</label>


<label>
    Junior    <input type="radio" value="junior" {...register("membership", {required:true})} />
</label>

<p>{errors.membership?.type==="required" && "We need your membership type"}</p>

{/* submit individual form: */}
<input type="submit" value="Submit Individual Membership" />
</form>
{/* ned of individual membership */}

</div>



}