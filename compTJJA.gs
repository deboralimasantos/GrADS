*programa para calcular composto de JJA do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen t.mon.ano.celsius.nc'
'set lev 850'
'c'
'set gxout shaded'
'set lat -90 0'
'set lon 140 340'

*PSA+
'comp1=ave(t,t=16,t=18)'
'comp2=ave(t,t=64,t=66)'
'comp4=ave(t,t=160,t=162)'
'comp5=ave(t,t=172,t=174)'



*PSA-

'comp8=ave(t,t=97,t=100)'
'comp9=ave(t,t=208,t=210)'
'comp10=ave(t,t=352,t=354)'
'comp11=ave(t,t=424,t=426)'

'somapos=((comp1+comp2+comp4+comp5)/4)'

'somaneg=((comp8+comp9+comp10+comp11)/4))'
'colormaps -flipped -map y2b -levels -6 5 0.5'

*'d somapos'
'd somaneg'

*'draw title Anomalia temperatura do ar 850 hPa JJA PSA+'
'draw title Anomalia temperatura do ar 850 hPa JJA PSA-'

'draw xlab longitude'
'draw ylab latitude'
'cbarn'


*'printim tjja+850.png'
*'printim tjja-850.png'
'printim barrat.png' 

