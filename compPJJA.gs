*programa para calcular composto de JJA do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen p.mon.ano.nc'
'c'
'set gxout shaded'
'set lat -60 20'
'set lon -100 -30'

*PSA+
'comp1=ave(precip,t=16,t=18)'
'comp2=ave(precip,t=64,t=66)'
'comp4=ave(precip,t=160,t=162)'
'comp5=ave(precip,t=172,t=174)'



*PSA-

'comp8=ave(precip,t=97,t=100)'
'comp9=ave(precip,t=208,t=210)'
'comp10=ave(precip,t=352,t=354)'
'comp11=ave(precip,t=424,t=426)'

'somapos=((comp1+comp2+comp4+comp5)/4)'

'somaneg=((comp8+comp9+comp10+comp11)/4))'

'colormaps -map y2b -levels -5 5 1'


'd somapos'
*'d somaneg'

'draw title Anomalia de precipitacao JJA PSA+'
*'draw title Anomalia de precipitacao JJA PSA-'

'draw xlab longitude'
'draw ylab latitude'



'printim pjja+.png'
*'printim pjja-.png' 

