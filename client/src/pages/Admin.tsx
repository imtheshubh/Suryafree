import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  createdAt: string;
}

export default function Admin() {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuoteRequests = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/quote-requests');
      const result = await response.json();
      
      if (result.success) {
        setQuoteRequests(result.data);
        setError(null);
      } else {
        setError(result.error || 'Failed to fetch quote requests');
      }
    } catch (err) {
      setError('Failed to fetch quote requests');
      console.error('Error fetching quote requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteRequests();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-admin-title">
              SuryaFree - Quote Requests
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and review customer quote requests
            </p>
          </div>
          <Button 
            onClick={fetchQuoteRequests} 
            disabled={loading}
            data-testid="button-refresh"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {error && (
          <Card className="mb-6 border-destructive">
            <CardContent className="p-4">
              <p className="text-destructive">{error}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Quote Requests ({quoteRequests.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                  Loading quote requests...
                </div>
              ) : quoteRequests.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No quote requests yet.</p>
                  <p className="text-sm">Customer inquiries will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {quoteRequests.map((request) => (
                    <Card key={request.id} className="hover-elevate" data-testid={`card-quote-${request.id}`}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg" data-testid={`text-quote-name-${request.id}`}>
                              {request.name}
                            </h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span data-testid={`text-quote-date-${request.id}`}>
                                  {formatDate(request.createdAt)}
                                </span>
                              </div>
                              <Badge variant="secondary" data-testid={`badge-quote-status-${request.id}`}>
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a 
                                href={`mailto:${request.email}`}
                                className="text-primary hover:underline"
                                data-testid={`link-quote-email-${request.id}`}
                              >
                                {request.email}
                              </a>
                            </div>
                            {request.phone && (
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <a 
                                  href={`tel:${request.phone}`}
                                  className="text-primary hover:underline"
                                  data-testid={`link-quote-phone-${request.id}`}
                                >
                                  {request.phone}
                                </a>
                              </div>
                            )}
                          </div>
                          
                          {request.message && (
                            <div className="md:col-span-2">
                              <h4 className="font-medium mb-2">Message:</h4>
                              <p 
                                className="text-muted-foreground bg-muted/50 p-3 rounded-md"
                                data-testid={`text-quote-message-${request.id}`}
                              >
                                {request.message}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}