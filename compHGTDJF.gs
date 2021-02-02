*programa para calcular composto de DJF do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen zh.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -90 0'
'set lon 140 340'


*PSA+
'comp1=ave(z,t=22,t=24)'
'comp2=ave(z,t=127,t=129)'


*PSA-
'comp3=ave(z,t=214,t=216)'
'comp4=ave(z,t=334,t=336)'
'comp5=ave(z,t=358,t=360)'

'somapos=((comp1+comp2)/2)'

'somaneg=((comp3+comp4+comp5)/3)'

'colormaps -map y2b -levels -60 80 10'

'd somapos'
*'d somaneg'

'draw title Anomalia de altura geopotencial (500hPa) DJF PSA+'
*'draw title Anomalia de altura geopotencial (500hPa) DJF PSA-'

'draw xlab longitude'
'draw ylab latitude'
'cbarn'
*'printim hgtdjf+.png'
*'printim hgtdjf-.png' 
