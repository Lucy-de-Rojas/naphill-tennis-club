import Router from "next/router"
import {useForm} from 'react-hook-form';


import { createDATE } from "../utils/createDATE";
import { getCoupleMembershipData } from "../utils/getCoupleMembershipData";








export default function CoupleMembershipForm() {


    const DATE = createDATE().DATE;
    const DATEexp = createDATE().DATEexp;
    const membershipYEARS = createDATE().membershipYEars;
  


    
// for the form hook:
const formDefaults = {defaultValues: {

    first_name1:'',
    surname1: '',
    email1: '',
    phone1: '',
    address1: '',
    date_of_birth1: '' ,
    
    membership1: 'couple',
    couple1: '',
    membershipSTART1: DATE,
    memnershipEND1: DATEexp,
    membershipYEARS1: membershipYEARS,

    first_name2:'',
    surname2: '',
    email2: '',
    phone2: '',
    address2: '',
    date_of_birth2: '' ,
    membership2: 'couple',
    couple2:  '',
    membershipSTART2: DATE,
    memnershipEND2: DATEexp,
    membershipYEARS2: membershipYEARS,
}};

// using form hook:
const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);















return <div>
    <br />
<h1>Couple Membership:</h1>
<form onSubmit={handleSubmit(getCoupleMembershipData)}>




{/* FIRST OF COUPLE: */}
    {/* first_name: */}

    <h2>First:</h2>
    
    <input
    {
        ...register("first_name1",{
            required: {value: true, message: "we need your first name",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:49, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="first name"
         />
         <p>{errors.first_name1?.message}</p>







    {/* surname: */}
    <input
    {
        ...register("surname1",{
            required: {value: true, message: "we need your surname",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:99, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="surname"
         />
         <p>{errors.surname1?.message}</p>







    {/* email: */}
    <input
    {
        ...register("email1",{
            required: {value: true, message: "we need your email",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="email"
        placeholder="email"
         />
         <p>{errors.email1?.message}</p>










    {/* phone: */}
    <input
    {
        ...register("phone1",{
            required: {value: true, message: "we need your phone",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="tel"
        placeholder="phone"
         />
         <p>{errors.phone1?.message}</p>



{/* address: */}
    <textarea
            rows="5"
    {
        ...register("address1",{
            required: {value: true, message: 'we do need your address'},
            minLength: {value: 10, message: 'too short, 10 characters at least'},
            maxLength: {value: 2000, message: 'too long'},
            
        })
    }>
    </textarea>
    <p>{errors.address1?.message}</p>





<br />
{/* date_of_birth: */}
<label>
Date of Birth:
    <input
        type="date"
        {
            ...register("date_of_birth1",{
                required: {value: true, message: 'we need your date fo birth'},
            })
        }
        
        
        />
        </label>
        <p>{errors.date_of_birth1?.message}</p>

{/* END OF FIRST OF COUPLE */}







{/* SECOND OF COUPLE: */}
    {/* first_name: */}
    <h2>Second:</h2>
    <input
    {
        ...register("first_name2",{
            required: {value: true, message: "we need your first name",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:49, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="first name"
         />
         <p>{errors.first_name2?.message}</p>







    {/* surname: */}
    <input
    {
        ...register("surname2",{
            required: {value: true, message: "we need your surname",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:99, message: 'your name is too long' }, 
        })
    } 
        type="text"
        placeholder="surname"
         />
         <p>{errors.surname2?.message}</p>







    {/* email: */}
    <input
    {
        ...register("email2",{
            required: {value: true, message: "we need your email",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="email"
        placeholder="email"
         />
         <p>{errors.email2?.message}</p>










    {/* phone: */}
    <input
    {
        ...register("phone2",{
            required: {value: true, message: "we need your phone",},
            minLength: {value: 1, message: "your name needs at least 2 letters"},
            maxLength: {value:199, message: 'your name is too long' }, 
        })
    } 
        type="tel"
        placeholder="phone"
         />
         <p>{errors.phone2?.message}</p>



{/* address: */}
    <textarea
            rows="5"
    {
        ...register("address2",{
            required: {value: true, message: 'we do need your address'},
            minLength: {value: 10, message: 'too short, 10 characters at least'},
            maxLength: {value: 2000, message: 'too long'},
            
        })
    }>
    </textarea>
    <p>{errors.address2?.message}</p>





<br />
{/* date_of_birth: */}
<label>
Date of Birth:
    <input
        type="date"
        {
            ...register("date_of_birth2",{
                required: {value: true, message: 'we need your date fo birth'},
            })
        }
        
        
        />
        </label>
        <p>{errors.date_of_birth2?.message}</p>

{/* END OF SECOND OF COUPLE */}











    
{/* submit individual form: */}
<input type="submit" value="Submit Couple Membership" />
</form>
{/* ned of individual membership */}

</div>



}