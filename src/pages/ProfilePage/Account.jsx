// src/pages/Account/Account.jsx
import React from "react";
import {
  ProfileForm,
  FormGroup,
  Input,
  ButtonGroup,
  SaveButton,
  CancelButton,
} from "./styles";

export const MyProfile = ({ profile, handleChange, handleSaveChanges }) => (
  <ProfileForm>
    <h2>Edit Your Profile</h2>
    <FormGroup>
      <Input
        type="text"
        name="firstName"
        value={profile.firstName}
        onChange={handleChange}
        placeholder="First Name*"
      />
      <Input
        type="text"
        name="lastName"
        value={profile.lastName}
        onChange={handleChange}
        placeholder="Last Name*"
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Input
        type="text"
        name="address"
        value={profile.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </FormGroup>
    <h3>Password Changes</h3>
    <FormGroup>
      <Input
        type="password"
        name="currentPassword"
        value={profile.currentPassword}
        onChange={handleChange}
        placeholder="Current Password"
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="password"
        name="newPassword"
        value={profile.newPassword}
        onChange={handleChange}
        placeholder="New Password"
      />
      <Input
        type="password"
        name="confirmPassword"
        value={profile.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm New Password"
      />
    </FormGroup>
    <ButtonGroup>
      <CancelButton>Cancel</CancelButton>
      <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
    </ButtonGroup>
  </ProfileForm>
);

export const AddressBook = () => (
  <ProfileForm>
    <h2>Address Book</h2>
    {/* Add form fields for Address Book */}
  </ProfileForm>
);

export const PaymentOptions = () => (
  <ProfileForm>
    <h2>My Payment Options</h2>
    {/* Add form fields for Payment Options */}
  </ProfileForm>
);
