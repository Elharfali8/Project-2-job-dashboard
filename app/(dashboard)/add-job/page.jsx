'use client';

import SelectInput from '@/components/SelectInput';
import FormInput from '@/components/FormInput';
import PageTitle from '@/components/PageTitle';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { handleChange, createJob, updateJob } from '@/features/job/jobSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
  const { position, company, location, status, mode, selectedStatus, selectedMode, jobs } =
    useSelector((store) => store.job);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const jobToEdit = jobs.find((job) => job.position === position && job.company === company);
    if (jobToEdit) {
      setIsEditing(true);
      setEditId(jobToEdit.id);
    } else {
      setIsEditing(false);
      setEditId(null);
    }
  }, [position, company, jobs]);

  const handleJobInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleJobSelectInput = ({ name, value }) => {
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !location || !position) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      dispatch(updateJob({ id: editId, company, location, position, status: selectedStatus, mode: selectedMode }));
      toast.success('Job updated');
    } else {
      dispatch(createJob({ company, location, position, status: selectedStatus, mode: selectedMode }));
    }

    router.push('/all-jobs');
  };

  return (
    <main>
      <div className="bg-muted rounded-lg p-4">
        <PageTitle text={isEditing ? 'Edit Job' : 'Add Job'} />
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* position */}
            <FormInput label="position" type="text" name="position" value={position} handleChange={handleJobInput} />
            {/* company */}
            <FormInput label="company" type="text" name="company" value={company} handleChange={handleJobInput} />
            {/* location */}
            <FormInput label="location" type="text" name="location" value={location} handleChange={handleJobInput} />
            {/* status */}
            <SelectInput
              label="status"
              name="status"
              data={status}
              value={selectedStatus}
              handleChange={handleJobSelectInput}
            />
            <SelectInput
              label="mode"
              name="mode"
              data={mode}
              value={selectedMode}
              handleChange={handleJobSelectInput}
            />
            {/* submit */}
            <div className="flex items-end w-full">
              <Button className="w-full text-lg capitalize">{isEditing ? 'Update' : 'Submit'}</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
