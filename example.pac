function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "api-manager-dev.devibm.tools-bnew.sdt.ericsson.se") || 
	dnsDomainIs(host, "identity.devibm.tools-bnew.sdt.ericsson.se") || 
	dnsDomainIs(host, "api-dev.devibm.tools-bnew.sdt.ericsson.se")
	|| shExpMatch(host, "(*.ericsson.se)") ) {
        return "SOCKS5 127.0.0.1:9091; SOCKS 127.0.0.1:9091";
	}
		
    return "DIRECT";
 
}