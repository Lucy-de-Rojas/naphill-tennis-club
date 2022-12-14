import Router from "next/router"
import {useForm} from 'react-hook-form';

import { createDATE } from "../utils/createDATE";
import { getIndividualMembershipData } from "../utils/getIndividualMembershipData";

import styles from '../styles/joinUs.module.css';



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
    membershipEND: DATEexp,
    membershipYEARS: membershipYEARS,
}};

// using form hook:
const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);















return <div>
    
<h1>Membership</h1>
<form onSubmit={handleSubmit(getIndividualMembershipData)}>










<hr />
<h2>Choose your membership:</h2>
{/* <hr /> */}





    {/* radio buttons container: */}
<div className={styles.radios}>


{/* radio buttons: */}




<label>
    <p>

    Under 7
    </p>
    <input type="radio" value="under 7" {...register("membership", {required:true})} />
    <p>£15</p>
</label>





<label>
    <p>
        Junior    
        </p>
        <input type="radio" value="junior" {...register("membership", {required:true})} />
        <p>£20</p>
</label>











<label>
    <p>

    Adult
    </p>

    <input type="radio" value="adult" {...register("membership", {required:true})} />
    <p>£70</p>
</label>










<label>
    <p>
        Retired   
        </p>
        
         <input type="radio" value="junior" {...register("membership", {required:true})} />
         <p>£50</p>
        
</label>
</div>
{/* <hr /> */}


<p className={styles.errormessage}>{errors.membership?.type==="required" && "We need your membership type"}</p>
























    {/* first_name: */}
    <input
    {
        ...register("first_name",{
            required: {value: true, message: "we need your first name",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:49, message: 'your name is too long' },
            placeholder:'First name', 
        })
    } 
        type="text"
        placeholder="first name"
         />
         <p className={styles.errormessage}>{errors.first_name?.message}</p>







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
         <p className={styles.errormessage}>{errors.surname?.message}</p>







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
         <p className={styles.errormessage}>{errors.email?.message}</p>










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
         <p className={styles.errormessage}>{errors.phone?.message}</p>



{/* address: */}
    <textarea
            rows="5"
            placeholder="Address"
    {
        ...register("address",{
            required: {value: true, message: 'we do need your address'},
            minLength: {value: 10, message: 'too short, 10 characters at least'},
            maxLength: {value: 2000, message: 'too long'},
            
        })
    }>
    </textarea>
    <p  className={styles.errormessage}>{errors.address?.message}</p>


<br />
{/* date_of_birth: */}
<label>
Date of Birth:<br />
    <input
        type="date"
        {
            ...register("date_of_birth",{
                required: {value: true, message: 'we need your date fo birth'},
            })
        }
        
        
        />
        </label>
        <p className={styles.errormessage}>{errors.date_of_birth?.message}</p>












{/* submit individual form: */}
<input type="submit" value="Submit Membership" />
</form>
{/* ned of individual membership */}

</div>



}