-- Drop the public SELECT policy that exposes subscriber emails
DROP POLICY IF EXISTS "Anyone can view active subscriptions" ON public.newsletter_subscribers;

-- Keep the INSERT policy so people can still subscribe
-- (Policy "Anyone can subscribe to newsletter" remains unchanged)