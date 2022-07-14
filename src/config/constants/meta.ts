import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Tenvium Network',
  description:
    'Official DEXSwap for TVM Chain',
  image:
    'https://raw.githubusercontent.com/Tenvium/tvm-swap/9907d3a1cf6df927af794c07c86d98be5684b8b0/public/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('TVM Swap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('TVM Swap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('TVM Swap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('TVM Swap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('TVM Swap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('TVM Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('TVM Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('TVM Swap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('TVM Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('TVM Swap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('TVM Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('TVM Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('TVM Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('TVM Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('TVM Swap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('TVM Swap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('TVM Swap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('TVM Swap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('TVM Info & Analytics')}`,
        description: 'View statistics for TVM exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('TVM Info & Analytics')}`,
        description: 'View statistics for TVM exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('TVM Info & Analytics')}`,
        description: 'View statistics for TVM exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('TVM')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('TVM')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('TVM')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('TVM')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('TVM')}`,
      }
    default:
      return null
  }
}
