'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Comment, Section } from '@/types';

interface CommentsProps {
  section: Section | null;
  onAddComment: (comment: { text: string; author: string }) => void;
}

export function Comments({ section, onAddComment }: CommentsProps) {
  const [newComment, setNewComment] = useState({ text: '', author: '' });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleAddComment = () => {
    if (newComment.text && newComment.author) {
      onAddComment(newComment);
      setNewComment({ text: '', author: '' });
      setIsPopoverOpen(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        {section ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{section.title}</h3>
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">Add Comment</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="author">Your Name</Label>
                      <Input
                        id="author"
                        value={newComment.author}
                        onChange={(e) =>
                          setNewComment({ ...newComment, author: e.target.value })
                        }
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment">Your Comment</Label>
                      <Textarea
                        id="comment"
                        value={newComment.text}
                        onChange={(e) =>
                          setNewComment({ ...newComment, text: e.target.value })
                        }
                        placeholder="Enter your comment"
                      />
                    </div>
                    <Button
                      onClick={handleAddComment}
                      disabled={!newComment.text || !newComment.author}
                      className="w-full"
                    >
                      Add Comment
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {section.comments.map((comment) => (
                <Card key={comment.id} className="p-3">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.author}`} />
                      <AvatarFallback>{getInitials(comment.author)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{comment.author}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">{comment.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            Select a section to view comments
          </div>
        )}
      </CardContent>
    </Card>
  );
} 