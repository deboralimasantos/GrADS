*programa para calcular composto de JJA do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen zh.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -90 0'
'set lon 140 340'


*PSA+
'comp1=ave(z,t=16,t=18)'
'comp2=ave(z,t=64,t=66)'
'comp4=ave(z,t=160,t=162)'
'comp5=ave(z,t=172,t=174)'



*PSA-

'comp8=ave(z,t=97,t=100)'
'comp9=ave(z,t=208,t=210)'
'comp10=ave(z,t=352,t=354)'
'comp11=ave(z,t=424,t=426)'

'somapos=((comp1+comp2+comp4+comp5)/4)'

'somaneg=((comp8+comp9+comp10+comp11)/4))'
'colormaps -map y2b -levels -60 80 10'

*'d somapos'
'd somaneg'

*'draw title Anomalia de altura geopotencial (500hPa) JJA PSA+'
'draw title Anomalia de altura geopotencial (500hPa) JJA PSA-'

'draw xlab longitude'
'draw ylab latitude'



*'printim hgtjja+.png'
'printim hgtjja-.png' 
