import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
  name: 'my-custom-theme',
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #2593cb 
    "--color-primary-50": "222 239 247", // #deeff7
    "--color-primary-100": "211 233 245", // #d3e9f5
    "--color-primary-200": "201 228 242", // #c9e4f2
    "--color-primary-300": "168 212 234", // #a8d4ea
    "--color-primary-400": "102 179 219", // #66b3db
    "--color-primary-500": "37 147 203", // #2593cb
    "--color-primary-600": "33 132 183", // #2184b7
    "--color-primary-700": "28 110 152", // #1c6e98
    "--color-primary-800": "22 88 122", // #16587a
    "--color-primary-900": "18 72 99", // #124863
    // secondary | #4F46E5 
    "--color-secondary-50": "229 227 251", // #e5e3fb
    "--color-secondary-100": "220 218 250", // #dcdafa
    "--color-secondary-200": "211 209 249", // #d3d1f9
    "--color-secondary-300": "185 181 245", // #b9b5f5
    "--color-secondary-400": "132 126 237", // #847eed
    "--color-secondary-500": "79 70 229", // #4F46E5
    "--color-secondary-600": "71 63 206", // #473fce
    "--color-secondary-700": "59 53 172", // #3b35ac
    "--color-secondary-800": "47 42 137", // #2f2a89
    "--color-secondary-900": "39 34 112", // #272270
    // tertiary | #0EA5E9 
    "--color-tertiary-50": "219 242 252", // #dbf2fc
    "--color-tertiary-100": "207 237 251", // #cfedfb
    "--color-tertiary-200": "195 233 250", // #c3e9fa
    "--color-tertiary-300": "159 219 246", // #9fdbf6
    "--color-tertiary-400": "86 192 240", // #56c0f0
    "--color-tertiary-500": "14 165 233", // #0EA5E9
    "--color-tertiary-600": "13 149 210", // #0d95d2
    "--color-tertiary-700": "11 124 175", // #0b7caf
    "--color-tertiary-800": "8 99 140", // #08638c
    "--color-tertiary-900": "7 81 114", // #075172
    // success | #18aa3d 
    "--color-success-50": "220 242 226", // #dcf2e2
    "--color-success-100": "209 238 216", // #d1eed8
    "--color-success-200": "197 234 207", // #c5eacf
    "--color-success-300": "163 221 177", // #a3ddb1
    "--color-success-400": "93 196 119", // #5dc477
    "--color-success-500": "24 170 61", // #18aa3d
    "--color-success-600": "22 153 55", // #169937
    "--color-success-700": "18 128 46", // #12802e
    "--color-success-800": "14 102 37", // #0e6625
    "--color-success-900": "12 83 30", // #0c531e
    // warning | #EAB308 
    "--color-warning-50": "252 244 218", // #fcf4da
    "--color-warning-100": "251 240 206", // #fbf0ce
    "--color-warning-200": "250 236 193", // #faecc1
    "--color-warning-300": "247 225 156", // #f7e19c
    "--color-warning-400": "240 202 82", // #f0ca52
    "--color-warning-500": "234 179 8", // #EAB308
    "--color-warning-600": "211 161 7", // #d3a107
    "--color-warning-700": "176 134 6", // #b08606
    "--color-warning-800": "140 107 5", // #8c6b05
    "--color-warning-900": "115 88 4", // #735804
    // error | #d21947 
    "--color-error-50": "248 221 227", // #f8dde3
    "--color-error-100": "246 209 218", // #f6d1da
    "--color-error-200": "244 198 209", // #f4c6d1
    "--color-error-300": "237 163 181", // #eda3b5
    "--color-error-400": "224 94 126", // #e05e7e
    "--color-error-500": "210 25 71", // #d21947
    "--color-error-600": "189 23 64", // #bd1740
    "--color-error-700": "158 19 53", // #9e1335
    "--color-error-800": "126 15 43", // #7e0f2b
    "--color-error-900": "103 12 35", // #670c23
    // surface | #383d4d 
    "--color-surface-50": "225 226 228", // #e1e2e4
    "--color-surface-100": "215 216 219", // #d7d8db
    "--color-surface-200": "205 207 211", // #cdcfd3
    "--color-surface-300": "175 177 184", // #afb1b8
    "--color-surface-400": "116 119 130", // #747782
    "--color-surface-500": "56 61 77", // #383d4d
    "--color-surface-600": "50 55 69", // #323745
    "--color-surface-700": "42 46 58", // #2a2e3a
    "--color-surface-800": "34 37 46", // #22252e
    "--color-surface-900": "27 30 38", // #1b1e26

  }
}
