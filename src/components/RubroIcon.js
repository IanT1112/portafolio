import {
  LuCar,
  LuHeartPulse,
  LuLandmark,
  LuMessageCircle,
  LuNewspaper,
  LuShoppingBag,
  LuTrendingUp,
} from "react-icons/lu";

const ICONOS = {
  salud: LuHeartPulse,
  fintech: LuTrendingUp,
  retail: LuShoppingBag,
  movilidad: LuCar,
  publico: LuLandmark,
  medios: LuNewspaper,
  atencion: LuMessageCircle,
};

export default function RubroIcon({ icono, className = "h-5 w-5" }) {
  const Icono = ICONOS[icono] ?? LuTrendingUp;
  return <Icono aria-hidden="true" className={className} />;
}
