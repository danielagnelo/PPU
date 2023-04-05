import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InventoryIcon from '@mui/icons-material/Inventory';
import SearchIcon from '@mui/icons-material/Search';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ApartmentSharpIcon from '@mui/icons-material/ApartmentSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const items = [
  {
    title: 'Material',
    id: 1,
    icon: (
      <SvgIcon fontSize="small">
        <HomeRepairServiceIcon />
      </SvgIcon>),
    subItem: [
      {
        title: 'Setor',
        path: '/setor',
        icon: (
          <SvgIcon fontSize="small">
            <ApartmentSharpIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Localizações',
        path: '/localizacoes',
        icon: (
          <SvgIcon fontSize="small">
            <LocationOnSharpIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Entrada EQUIP/SOBRE',
        path: '/entradaEquipamentoSobressalentes',
        icon: (
          <SvgIcon fontSize="small">
            <SwipeLeftIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Saída EQUIP/SOBRE',
        path: '/saidaEquipamentoSobressalentes',
        icon: (
          <SvgIcon fontSize="small">
            <SwipeRightIcon />
          </SvgIcon>
        )
      },
      {
        title: 'PIM',
        path: '/pim',
        icon: (
          <SvgIcon fontSize="small">
            <InventoryIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Caixa de Missão',
        path: '/caixaMissao',
        icon: (
          <SvgIcon fontSize="small">
            <AddBoxIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Caixa de Missão Padrão',
        path: '/caixaMissaoPadrao',
        icon: (
          <SvgIcon fontSize="small">
            <CheckBoxIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Ajustes Asa Fixa',
        path: '/ajustesAsaFixa',
        icon: (
          <SvgIcon fontSize="small">
            <PlumbingIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Ajustes Asa Rotativa',
        path: '/ajustesAsaRotativa',
        icon: (
          <SvgIcon fontSize="small">
            <PlumbingIcon />
          </SvgIcon>
        )
      }
    ]
  },
  {
    title: 'Consultas',
    id: 2,
    icon: (
      <SvgIcon fontSize="small">
        <SearchIcon />
      </SvgIcon>),
    subItem: [
      {
        title: 'Início',
        path: '/',
        icon: (
          <SvgIcon fontSize="small">
            <HomeIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Modelo de Equipamento',
        path: '/modeloEquipamento',
        icon: (
          <SvgIcon fontSize="small">
            <CogIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Árvore de Aeronaves',
        path: '/arvoreAeronaves',
        icon: (
          <SvgIcon fontSize="small">
            <ConnectingAirportsIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Árvore de Equipamentos',
        path: '/arvoreEquipamentos',
        icon: (
          <SvgIcon fontSize="small">
            <AccountTreeIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Consulta Controle Total',
        path: '/consultaControleTotal',
        icon: (
          <SvgIcon fontSize="small">
            <ScreenSearchDesktopIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Consulta Controle Geral',
        path: '/consultaControleGeral',
        icon: (
          <SvgIcon fontSize="small">
            <TravelExploreIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Consulta Material de Apoio',
        path: '/consultaMaterialApoio',
        icon: (
          <SvgIcon fontSize="small">
            <ContentPasteSearchIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Disponibilidade por Aeronave',
        path: '/disponibilidadeAeronave',
        icon: (
          <SvgIcon fontSize="small">
            <AirplaneTicketIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Equipamentos Reparáveis',
        path: '/equipamentosReparaveis',
        icon: (
          <SvgIcon fontSize="small">
            <PlumbingIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Estoque',
        path: '/estoque',
        icon: (
          <SvgIcon fontSize="small">
            <WarehouseIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Ferramentas Especiais',
        path: '/ferramentasEspeciais',
        icon: (
          <SvgIcon fontSize="small">
            <BuildIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Itens On Condition',
        path: '/itensOnCondition',
        icon: (
          <SvgIcon fontSize="small">
            <AssignmentTurnedInIcon />
          </SvgIcon>
        )
      },
      {
        title: 'PIM Executados',
        path: '/pimExecutados',
        icon: (
          <SvgIcon fontSize="small">
            <InventoryIcon />
          </SvgIcon>
        )
      },
    ]
  },

  /* {
    title: 'Login',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Error',
    path: '/404',
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    )
  }
  ,
  {
    title: 'Início',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <AssignmentTurnedInIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <AirplaneTicketIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <PlumbingIcon />
      </SvgIcon>
    )
  } */
];
