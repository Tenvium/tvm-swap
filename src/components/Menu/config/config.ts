import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
/* import { nftsBaseUrl } from 'views/Nft/market/constants'

const perpetualLangs = { en: 'en', 'zh-cn': 'zh-CN', ko: 'ko' }
const perpLangMap = (code: string) => {
  if (perpetualLangs[code]) {
    return perpetualLangs[code]
  }
  return 'en'
} */

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], code: string) => ConfigMenuItemsType[] = (t, code) => [
  {
    label: t('Finance'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      // {
      //   label: t('Zap'),
      //   href: 'https://sale.sharknado.io/#/zap',
      // }
      // {
      //   label: t('Limit'),
      //   href: '/limit-orders',
      // }, 
      {
        label: t('Liquidity'),
        href: '/liquidity',
      } 
      // {
      //   label: t('Perpetual'),
      //   href: `https://perp.pancakeswap.finance/${perpLangMap(code)}/futures/BTCUSDT`,
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  } /* 
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  }, */,
  // {
  //   label: t('Earn'),
  //   href: '#',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  //     // {
  //     //   label: t('Staking'),
  //     //   href: '/pools',
  //     // },
  //     /* 
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     }, */
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: `https://starsharks.com/market`,
  //   icon: NftIcon,
  //   fillIcon: NftFillIcon,
  //   items: [
  //     /* {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //     {
  //       label: t('Activity'),
  //       href: `${nftsBaseUrl}/activity`,
  //     }, */
  //   ],
  // },
  {
    label: '',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [ 
      {
        label: t('Website'),
        href: 'https://tenvium.network',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.tenvium.network',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
