type IProps = {
  handleDelete: () => void;
  deleteLoading: boolean;
};

const DeleteModal = ({ handleDelete, deleteLoading }: IProps) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div className=" flex flex-col">
            <h2 className="card-title">You are about to delist the book</h2>
            <div className="card-actions justify-end  mt-8 gap-5">
              <button disabled={deleteLoading} className="btn rounded-sm group">
                <label htmlFor="delete-modal">CANCEL </label>
              </button>
              <button
                disabled={deleteLoading}
                onClick={handleDelete}
                className="btn   rounded-sm"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
