import { useContext } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import StateContext from "../../StateContext/StateContext";
const Modal = () => {

    const {totalCost} = useContext(StateContext)

    return (
        <div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box  lg:p-[32px] flex flex-col gap-6">
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className="font-bold max-md:text-[56px] text-green-400 lg:text-[72px] justify-center flex"><BsFillPatchCheckFill /></h3>
                        <h3 className="font-bold text-[24px]  text-center">Payment Successfully</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-center text-base text-[#09080F99] font-medium">Thanks for purchasing.</p>
                        <p className="text-center text-base text-[#09080F99] font-medium">Total:{totalCost}</p>
                    </div>
                    <div className="w-full">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="w-full text-xl font-semibold rounded-full bg-[#11000008] p-2.5 hover:bg-[#9538E2] hover:text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;