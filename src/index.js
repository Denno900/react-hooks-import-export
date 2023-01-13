import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, elevation, wildlife} from "./parks/RockyMountain"
ReactDOM.render(
    <>
        <ColoradoStateParks />
        <MesaVerde />
        <div>
        {trees}
        {elevation()}
        {wildlife()}
        </div>
    </>,
    document.getElementById("root")
    );
