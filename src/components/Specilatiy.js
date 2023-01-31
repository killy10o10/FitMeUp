import React from 'react';

const Specilatiy = ({ specilatiy }) => (
    <div className='container pt-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="specilatiyName" className="form-label">Specilatiy Name</label>
                <input type="text" className="form-control" id="specilatiyName" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='border p-2 mt-3'> 
            {specilatiy.map((el,index) => {
                return <div key={index} className="d-flex justify-content-between mb-3 border-bottom pb-2">
                    <p>{el.name}</p>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            })}
        </div>
    </div>
);

export default Specilatiy;
