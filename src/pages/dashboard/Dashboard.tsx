import React from "react";
import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../types";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <ButtonUI
        type="button"
        children="Logout"
        onClick={() => navigate(PagesPaths.LANDING)}
      />
    </div>
  );
}
