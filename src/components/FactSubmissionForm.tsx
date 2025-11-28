import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const factSchema = z.object({
  title: z
    .string()
    .trim()
    .min(10, "Title must be at least 10 characters")
    .max(200, "Title must be less than 200 characters"),
  content: z
    .string()
    .trim()
    .min(50, "Content must be at least 50 characters")
    .max(5000, "Content must be less than 5000 characters"),
  category: z.string().min(1, "Please select a category"),
});

type FactFormValues = z.infer<typeof factSchema>;

const categories = [
  "Science",
  "Technology",
  "History",
  "Nature",
  "Space",
  "Biology",
  "Physics",
  "Chemistry",
  "Geography",
  "Medicine",
  "Psychology",
  "Other",
];

export const FactSubmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FactFormValues>({
    resolver: zodResolver(factSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
    },
  });

  const onSubmit = async (values: FactFormValues) => {
    setIsSubmitting(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in to submit a fact.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      const { error } = await supabase.from("facts").insert({
        title: values.title,
        content: values.content,
        category: values.category,
        user_id: user.id,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your fact has been submitted successfully.",
      });

      form.reset();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting fact:", error);
      toast({
        title: "Error",
        description: "Failed to submit fact. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a compelling title for your fact"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A clear, concise title that captures the essence of your fact.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose the category that best fits your fact.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your fascinating fact here..."
                  className="min-h-[200px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide detailed information about your fact. Include sources if
                possible.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button
            type="submit"
            variant="hero"
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? "Submitting..." : "Submit Fact"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard")}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
