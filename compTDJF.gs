*programa para calcular composto de DJF do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen t.mon.ano.celsius.nc'
'set lev 850'
'c'
'set gxout shaded'

'set lat -60 20'
'set lon -100 -30'


*PSA+
'comp1=ave(t,t=22,t=24)'
'comp2=ave(t,t=127,t=129)'


*PSA-
'comp3=ave(t,t=214,t=216)'
'comp4=ave(t,t=334,t=336)'
'comp5=ave(t,t=358,t=360)'

'somapos=((comp1+comp2)/2)'

'somaneg=((comp3+comp4+comp5)/3)'

'colormaps -flipped -map y2b -levels -6 5 0.5'

*'d somapos'
'd somaneg'

*'draw title Anomalia temperatura do ar 850 hPa DJF PSA+'
'draw title Anomalia temperatura do ar 850 hPa DJF PSA-'

'draw xlab longitude'
'draw ylab latitude'

*'printim tdjf+850.png'
'printim tdjf-850.png'
