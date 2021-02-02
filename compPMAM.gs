*programa para calcular composto de precipitação para MAM durante o PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen p.mon.ano.nc'
'c'
'set gxout shaded'

'set lat -60 20'
'set lon -100 -30'



*PSA+

'comp1=ave(precip,t=61,t=63)'
'comp2=ave(precip,t=121,t=123)'
'comp3=ave(precip,t=133,t=135)'
'comp4=ave(precip,t=193,t=195)'
'comp5=ave(precip,t=253,t=255)'


*PSA-
'comp6=ave(precip,t=229,t=231)'
'comp7=ave(precip,t=361,t=363)'
'comp8=ave(precip,t=365,t=367)'
'comp9=ave(precip,t=433,t=435)'


'somapos=((comp1+comp2+comp3+comp4+comp5)/5)'

'somaneg=((comp6+comp7+comp8+comp9)/4))'

'colormaps -map y2b -levels -5 5 1'

*'d somapos'
'd somaneg'

*'draw title Anomalia de precipitacao MAM PSA+'
'draw title Anomalia de precipitacao MAM PSA-'

'draw xlab longitude'
'draw ylab latitude'

'printim pmam-.png' 
*'printim pmam+.png' 
