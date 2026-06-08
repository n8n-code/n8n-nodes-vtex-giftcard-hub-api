import type { INodeProperties } from 'n8n-workflow';

export const transactionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					]
				}
			},
			"options": [
				{
					"name": "Create Gift Cardin Gift Card Provider",
					"value": "Create Gift Cardin Gift Card Provider",
					"action": "Create GiftCard in GiftCard Provider",
					"description": "Creates a giftcard in a giftcard provider.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards"
						}
					}
				},
				{
					"name": "Get Gift Cardfrom Gift Card Provider",
					"value": "Get Gift Cardfrom Gift Card Provider",
					"action": "Get GiftCard from GiftCard Provider",
					"description": "Returns all giftcards from a giftcard provider according to the filters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/_search"
						}
					}
				},
				{
					"name": "Get Gift Cardfrom Gift Card Providerby ID",
					"value": "Get Gift Cardfrom Gift Card Providerby ID",
					"action": "Get GiftCard from GiftCard Provider by ID",
					"description": "Returns a specific giftcard from a giftcard provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}"
						}
					}
				},
				{
					"name": "List All Gift Card Transactions",
					"value": "List All Gift Card Transactions",
					"action": "List All GiftCard Transactions",
					"description": "Return all transaction from a giftcard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions"
						}
					}
				},
				{
					"name": "Create Gift Card Transaction",
					"value": "Create Gift Card Transaction",
					"action": "Create GiftCard Transaction",
					"description": "Creates a transaction to a giftcard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions"
						}
					}
				},
				{
					"name": "List All Gift Card Cancellation Transactions",
					"value": "List All Gift Card Cancellation Transactions",
					"action": "List All GiftCard Cancellation Transactions",
					"description": "Returns a collection of cancellation transactions from a giftcard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"tId\"]}}/cancellations"
						}
					}
				},
				{
					"name": "Create Gift Card Cancellation Transaction",
					"value": "Create Gift Card Cancellation Transaction",
					"action": "Create GiftCard Cancellation Transaction",
					"description": "Creates a cancellation transaction to a giftcard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"tId\"]}}/cancellations"
						}
					}
				},
				{
					"name": "List All Gift Card Settlement Transactions",
					"value": "List All Gift Card Settlement Transactions",
					"action": "List All GiftCard Settlement Transactions",
					"description": "Returns a collection of settlement transactions from a giftcard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"tId\"]}}/settlements"
						}
					}
				},
				{
					"name": "Create Gift Card Settlement Transaction",
					"value": "Create Gift Card Settlement Transaction",
					"action": "Create GiftCard Settlement Transaction",
					"description": "Creates a settlement transaction to a giftcard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"tId\"]}}/settlements"
						}
					}
				},
				{
					"name": "Get Gift Card Transactionby ID",
					"value": "Get Gift Card Transactionby ID",
					"action": "Get GiftCard Transaction by ID",
					"description": "Returns a specific transaction from a giftcard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}"
						}
					}
				},
				{
					"name": "Get Gift Card Authorization Transaction",
					"value": "Get Gift Card Authorization Transaction",
					"action": "Get GiftCard Authorization Transaction",
					"description": "Returns the transaction authorization info.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcardproviders/{{$parameter[\"giftCardProviderID\"]}}/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/authorization"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Cardin Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/_search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "REST Range",
			"name": "REST-Range",
			"required": true,
			"description": "Range of documents to show.",
			"default": "resources=0-49",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"REST-Range": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert example here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/_search<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Cardfrom Gift Card Providerby ID"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "T Id",
			"name": "tId",
			"required": true,
			"description": "Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Cancellation Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "T Id",
			"name": "tId",
			"required": true,
			"description": "Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Cancellation Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "T Id",
			"name": "tId",
			"required": true,
			"description": "Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"List All Gift Card Settlement Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "T Id",
			"name": "tId",
			"required": true,
			"description": "Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cart",
			"name": "cart",
			"type": "json",
			"default": "{\n  \"discounts\": -20,\n  \"grandTotal\": 182,\n  \"items\": [\n    {\n      \"id\": \"2000002\",\n      \"name\": null,\n      \"price\": 200,\n      \"productId\": \"2000000\",\n      \"quantity\": 1,\n      \"refId\": \"MEV41\"\n    }\n  ],\n  \"itemsTotal\": 200,\n  \"redemptionCode\": \"FASD-ASDS-ASDA-ASDA\",\n  \"relationName\": \"loyalty-program\",\n  \"shipping\": 2,\n  \"taxes\": 0\n}",
			"routing": {
				"send": {
					"property": "cart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client",
			"name": "client",
			"type": "json",
			"default": "{\n  \"document\": \"42151783120\",\n  \"email\": \"email@domain.com\",\n  \"id\": \"3b1ab\"\n}",
			"routing": {
				"send": {
					"property": "client",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Settlement Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "Gift Card transaction ID.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}/authorization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "VTEX API AppKey",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "VTEX API AppToken",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card Provider ID",
			"name": "giftCardProviderID",
			"required": true,
			"description": "Gift Card provider's ID.",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "Gift Card ID.",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "Gift Card transaction ID.",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Authorization Transaction"
					]
				}
			}
		},
];
